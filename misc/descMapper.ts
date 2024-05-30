interface DescMapper {
  [key: string]: {
    desc1: string;
    desc2: string;
  };
}

export const DescMapper: DescMapper = {
  "/": {
    desc1: "Connect with any device.",
    desc2: "Everything you need is an internet connection.",
  },
  "/signup": {
    desc1: "Join us!",
    desc2: "Just go through the boring process of creating an account.",
  },
  "/otp": {
    desc1: "It's just OTP verification",
    desc2: "You are one step away from recovering your password.",
  },
};
