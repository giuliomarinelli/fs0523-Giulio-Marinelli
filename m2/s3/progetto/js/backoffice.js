const showData = async () => {
    const data = await App.AJAX();
    console.log(data);
}
showData()