import axios from "axios";


const useAxiosPublic = () => {
    const instance = axios.create({
      baseURL: "http://localhost:5000/api",
     
    });
    return instance
};

export default useAxiosPublic;