//Validate the following

//Password must have atleast 6 characters

//atleast 1 upper case

//atleast 1 lower case

//atleast 1 special chatacter !@#$%^&*{}<>?/|\

export const validator = (password = "", confirmPassword = "") => {
  const error = [];
  password.length < 6 && error.push("At least 6 characters required");

  !/[A-Z]/.test(password) &&
    error.push("Password must contain atleast one Upper case Letter");

  !/[a-z]/.test(password) &&
    error.push("Password must contain atleast one Lower case Letter");

  !/[0-9]/.test(password) &&
    error.push("Password must contain atleast one Number");

  !/[!@#$%^&*_+=|{}()]/.test(password) &&
    error.push("Password must contain atLeast one special Character");

  password !== confirmPassword && error.push("Password do not match");
  return error;
};
