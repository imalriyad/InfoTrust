import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  const handleGoogleLogin = () => {
    const totalBalance = 100;
    const totalProfit = 0;
    const totalSpent = 0;
    const totalReferral = 0;
    const uniqeId = Math.random().toString(36).substring(2, 10);
    const baseurl = "https://invotrust.com/referral/?ref=";
    const refferLink = baseurl + uniqeId;
    const toastId = toast.loading("logging....");

    googleLogin()
      .then((res) => {
        const userMail = { email: res.user?.email };

        // Create access token and include it in the headers
        axios
          .post("/auth/access-token", userMail)
          .then((tokenResponse) => {
            const accessToken = tokenResponse.data.access_token;

            // Include the access token in the headers of the get-user request
            axios
              .get(`/get-user?email=${res.user?.email}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              })
              .then((response) => {
                const userExists = response.data;
                console.log(userExists);
                if (userExists) {
                  toast.success("Logged in Successful", { id: toastId });
                  navigate("/Dashboard/Dashboard");
                } else {
                  const userDetails = {
                    name: res.user?.displayName,
                    email: res.user?.email,
                    refferLink,
                    totalBalance,
                    totalProfit,
                    totalSpent,
                    totalReferral,
                  };
                  axios.post("/create-user", userDetails).then(() => {
                    toast.success("Logged in Successful", { id: toastId });
                    navigate("/Dashboard/Dashboard");
                  });
                }
              })
              .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch user data", { id: toastId });
              });
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to create access token", { id: toastId });
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(`${err.message.slice(17).replace(")", "")}`, {
          id: toastId,
        });
      });
  };

  return (
    <>
      <button onClick={handleGoogleLogin} className="btn w-full rounded">
        <img
          src="https://i.postimg.cc/NfrS3Wtd/pngwing-com-1.png"
          className="w-[23px]"
          alt=""
        />
        continue with google
      </button>
    </>
  );
};

export default GoogleLogin;
