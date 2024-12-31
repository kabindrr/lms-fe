import axios from "axios";

export const apiProcessor = async ({ url, method, payload }) => {
  try {
    console.log(payload);
    const response = await axios({
      url,
      method,
      data: payload,
      //   headers,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
