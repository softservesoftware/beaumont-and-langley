import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as cdk from "aws-cdk-lib";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import { Construct } from "constructs";

export interface AwsStackProps extends StackProps {
  domainName: string;
}

export class AwsStack extends Stack {
  constructor(scope: Construct, id: string, props: AwsStackProps) {
    super(scope, id, props);

    // cert for the domain name
    const bareCert = new acm.Certificate(this, "Certificate", {
      domainName: props.domainName,
      validation: acm.CertificateValidation.fromDns(),
    });

    // wildcard cert for the domain name
    // const wildcardCert = new acm.Certificate(
    //   this,
    //   "WildcardCertificate",
    //   {
    //     domainName: `*.${props.domainName}`,
    //     validation: acm.CertificateValidation.fromDns(),
    //   }
    // );

    // hosted zone for domain name if domain is managed in r53
    // const zone = route53.HostedZone.fromLookup(this, "Zone", {
    //   domainName: `${props.domainName}`,
    // });

    // s3 static site deployment for landing page
    const uiBucket = new s3.Bucket(this, `bucket`, {});

    // landing page distribution
    const uiDistribution = new cloudfront.Distribution(
      this,
      `distribution`,
      {
        certificate: bareCert,
        domainNames: [props.domainName],
        defaultBehavior: {
          origin: new cdk.aws_cloudfront_origins.S3Origin(uiBucket),
          viewerProtocolPolicy:
            cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        defaultRootObject: "index.html",
        errorResponses: [
            {
              httpStatus: 404,
              responseHttpStatus: 200,
              responsePagePath: "/index.html",
            },
            {
              httpStatus: 403,
              responseHttpStatus: 200,
              responsePagePath: "/index.html",
            },
          ],
      }
    );
    const landingPageDeployment = new s3deploy.BucketDeployment(
      this,
      `deployment`,
      {
        sources: [cdk.aws_s3_deployment.Source.asset("build")],
        destinationBucket: uiBucket,
        distribution: uiDistribution,
        distributionPaths: ["/*"],
      }
    );
    // if (props.domainName.split('.').length===3) {
    //   // Non-apex domain - create a CNAME record
    //   new route53.CnameRecord(this, `cname-record`, {
    //     zone: props.zone,
    //     recordName: props.domainName,
    //     domainName: uiDistribution.distributionDomainName,
    //   });
    // } else {
    //   // Apex domain - create an A record
    //   new route53.ARecord(this, `a-record`, {
    //     zone: props.zone,
    //     recordName: props.domainName,
    //     target: route53.RecordTarget.fromAlias(new cdk.aws_route53_targets.CloudFrontTarget(uiDistribution)),
    //   });
    // }

    // // cloudformation exports
    new cdk.CfnOutput(this, `bucket-name`, {
      value: uiBucket.bucketName,
    });
    new cdk.CfnOutput(this, `distribution-domain-name`, {
      value: uiDistribution.distributionDomainName,
    });
    new cdk.CfnOutput(this, `distribution-id`, {
      value: uiDistribution.distributionId,
    });
  }
}
