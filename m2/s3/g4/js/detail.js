const getImageFromSearchParam = async () => {
    const url = new URLSearchParams(location.search);
    console.log(url.get('id'));
}
