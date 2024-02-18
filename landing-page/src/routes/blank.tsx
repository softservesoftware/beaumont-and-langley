
import blLogo from "../img/blLogo.png";

export default function Blank() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="text-center p-4 h-screen flex flex-col items-center justify-center">
        <img src={blLogo} alt="Beaumont & Langley Logo" className="w-64 h-64" />
        <h1 className="text-3xl font-semibold mt-2">
          Innovation in M&A Advisory
        </h1>
        <p className="mt-2">
            A boutique M&A advisory firm that helps business
            owners achieve meaningful exits.
        </p>
      </header>
      <a className="my-2" href="mailto:contact@beaumontlangley.com">contact@beaumontlangley.com</a>
    </div>
  );
}
