const postJobApi = async (e) => {
    e.preventDefault();
    alert("Successfully Job Post")
    fetch("http://daycare.uveoustech.com/api/_Account/LoginJwt",
        {
            method: "POST",
            dataType: "json",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Account: loginAccount,
                Password: loginPassword,
                IsReload: true
            }),
        }).then(function (response) {
            response.json();
        })
    // .then(data => console.log(data));
}
export default postJobApi;