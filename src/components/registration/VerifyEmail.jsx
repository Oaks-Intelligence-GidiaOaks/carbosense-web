import { useMutation } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { resendOTP, verifyOTP } from "../../services";
import {
  exitRight,
  initialLeft,
  initialRight,
  slideLeft,
  slideRight,
} from "../../constants/framer";
import { Button, SizedBox, Spinner, TextButton, TextInput } from "../ui";
import { RefreshCw } from "lucide-react";
import toast from "react-hot-toast";
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

const VerifyEmail = ({ direction, setDirection, form, formSetter }) => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState();

  const { accessToken } = useSelector((state) => state.user);
  const [, setTimes] = useState(1);
  const [countDown, setCountDown] = useState(
    secureLocalStorage.getItem("ORT") ?? 60
  );

  const setFormValue = (name, value) => {
    formSetter((prev) => ({ ...prev, [name]: value }));
  };

  const isButtonDisabled = useMemo(() => {
    if (form.otp.trim().length < 6) return true;
    return false;
  }, [form.otp]);

  // submit otp
  const submitOTP = useMutation({
    mutationKey: ["submit_otp"],
    mutationFn: (data) => verifyOTP(data, accessToken),
    onSuccess: () => {
      secureLocalStorage.removeItem("ORT");
      setDirection(() => "forward");
      navigate("/admin");
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const resendOtpMutation = useMutation({
    mutationKey: ["resend_otp"],
    mutationFn: (token) => {
      setTimes((prev) => prev++);
      return toast.promise(resendOTP(token), {
        loading: "Sending OTP",
        success: "OTP successfully sent to your mail. Please check your inbox.",
        error: "Could not send OTP at the moment",
      });
    },
    onSuccess: () => {
      // otp successfully sent
      secureLocalStorage.setItem("OSS", true);
      const cachedTimer = secureLocalStorage.getItem("ORT") ?? 60;
      setCountDown(cachedTimer <= 0 ? 60 : cachedTimer);
      let timer = setInterval(() => {
        // OTP Resend Timer
        setCountDown((prev) => {
          secureLocalStorage.setItem("ORT", prev - 1);
          return prev - 1;
        });
      }, 1000);
      setTimer(timer);
    },
    onError: () => {
      // otp error
      secureLocalStorage.setItem("OSS", false);
    },
    retry: 0,
  });

  // clear timer
  useEffect(() => {
    if (timer && countDown <= 0) {
      clearInterval(timer);
      setTimer(null);
      console.log("Timer cleared");
    }
  }, [countDown, timer]);

  // remove timer
  useEffect(() => {
    if (countDown > 0) {
      let timer = setInterval(() => {
        // OTP Resend Timer
        setCountDown((prev) => {
          secureLocalStorage.setItem("ORT", prev - 1);
          return prev - 1;
        });
      }, 1000);
      setTimer(timer);
    }
  }, []);

  return (
    <motion.div
      initial={direction === "forward" ? initialRight : initialLeft}
      animate={direction === "forward" ? slideLeft : slideRight}
      exit={exitRight}
      className="flex-col pt-20 flex-1 min-[760px]:flex-[0.4] h-full items-stretch justify-center"
    >
      <div className="flex h-[clamp(300px,100%,700px)] flex-col justify-center items-center flex-1">
        <h1 className="text-3xl font-semibold text-primary-black w-[70%]">
          Verify your email
        </h1>
        <SizedBox height="h-2" />
        <h1 className="text-primary-black w-[70%]">
          Input the one time passcode sent to your email
        </h1>
        <div className="mt-6 pb-10 w-full flex-col flex items-center">
          <TextInput
            bgColor="bg-white"
            label="OTP"
            name="otp"
            value={form.otp}
            valueSetter={setFormValue}
            width="w-[70%]"
          />
          <SizedBox height="h-6" />
          <Button
            disabled={isButtonDisabled}
            width="w-[70%]"
            content={submitOTP.isPending ? <Spinner /> : <span>Next</span>}
            callback={() => {
              submitOTP.mutate({ otp: form.otp });
            }}
          />
          <SizedBox height="h-6" />
          <div className="text-primary-black w-[70%] flex flex-nowrap gap-1">
            <TextButton
              content={"Resend OTP"}
              disabled={Boolean(timer) || resendOtpMutation.isPending}
              prefix={<RefreshCw size={16} />}
              callback={() => resendOtpMutation.mutate(accessToken)}
            />{" "}
            {countDown > 0 && (
              <span>
                {" "}
                in <span className="font-semibold">{countDown}s</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

VerifyEmail.propTypes = {
  stepSetter: PropTypes.func,
  step: PropTypes.number.isRequired,
  direction: PropTypes.string.isRequired,
  setDirection: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  formSetter: PropTypes.func.isRequired,
};

export default VerifyEmail;
