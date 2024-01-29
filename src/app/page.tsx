import Image from "next/image";
import GitHubCorner from "./githubcorner";

export default function Home() {
  return (
    <>
    <GitHubCorner/>

    <main className="flex min-h-screen flex-col items-center font-sans p-24 text-white bg-gradient-to-r from-slate-700">
      <div className="">
        <div className=" p-8 text-center">          

    <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
    <br className="block md:hidden" />
    <span
      className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
      >
      sh.url
    </span>
    <span
      className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"
      ></span>
</h1>
          <p className="">a new shortener url</p>
          <div className="flex justify-around mt-8">
            <input className="text-2xl text-black" type="URL" />
            <button className="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded">
              shorten
            </button>
          </div>
        </div>

        <table className="table-auto m-auto">
          <thead>
            <tr className="bg-slate-800">
              <th className="border px-4 py-2">Original</th>
              <th className="border px-4 py-2">Shortened</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">https://nextjs.org</td>
              <td className="border px-4 py-2">sh.url/1</td>
              </tr>
          </tbody>
        </table>
        
      </div>
    </main>
      </>
  );
}
