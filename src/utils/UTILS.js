
const getToken = () => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    return parsedUser.token;
  };

module.exports = {
    getToken,
}