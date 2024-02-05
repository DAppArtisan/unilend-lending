
async function getArtist() {
  const res = await fetch("https://dummyjson.com/products")
  console.log('result', res);
  return res.json()
}
 

 
export default async function Page() {

  const artistData = getArtist()
  
 
  // Wait for the promises to resolve
  const [artist] = await Promise.all([artistData])
 
  return (
    <>
      <h1>{artist.name}</h1>
    </>
  )
}