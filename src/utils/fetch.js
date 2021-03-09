async function doFetch(url, setData) {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    setData(data);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default doFetch;
