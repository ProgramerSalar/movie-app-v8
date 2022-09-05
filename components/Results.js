

import Card from "./Card"

export default function Results({ results }) {
  return (
    <div className="bg-gray-700 text-green-100 select-none sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
        {results.map((result)=>(
          // <h1>{result.title}</h1>
          <Card key={result.id} result={result}/>
        ))}
    </div>
  )
}


