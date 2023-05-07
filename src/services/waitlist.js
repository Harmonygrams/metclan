import axios from "axios";
const waitlist = async (_email) => {
  const response = await axios({
    method: "post",
    data: _email,
    url: process.env.REACT_APP_WAITLIST_URL,
  });
  return response;
};
export { waitlist };
