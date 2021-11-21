import { FormControl } from "@chakra-ui/react";
import {
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,

} from "@chakra-ui/input";
import { useState } from "react";
import { Button, IconButton } from "@chakra-ui/button";
import {
  VStack,
  Text,
  HStack,
  Stack,
  Divider,
  Flex,
  Spacer,
  Box,
  FormHelperText,
} from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosPerson } from "react-icons/io";
import { BiLockAlt } from "react-icons/bi";
import { Image } from "@chakra-ui/image";
import { BiShowAlt, BiHide } from "react-icons/bi";
import facebookIcon from "../../../assets/facebook.png";
import googleIcon from "../../../assets/Google.png";
import linkedInIcon from "../../../assets/linkedin.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "../../../utils/useForm";
import { toast } from "react-toastify";
import { handleLoginUser } from "../../../redux/actions/userActions";

const style ={
    color:"red",
  }

const SignInForm = () => {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const dispatch = useDispatch();

  //handling form submission
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm({
    validations: {
    username: {
        pattern: {
            value: '^[A-Za-z]*$',
            message: "You're not allowed to use special characters or numbers in your name.",
        },
        },
      email: {
        pattern: {
          value: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
          message: "Please enter a valid email address",
        },
      },
      password: {
        custom: {
          isValid: (value) => value.length > 6,
          message: "The password needs to be at least 6 characters long.",
        },
      },
    },

    onSubmit: () => {
      //  await axios
      // .post("https://api.zuri.chat/users", {
      //   first_name,
      //   last_name: other_name,
      //   email,
      //   password
      // })
      // .then(response => {
      //   const { data, message } = response.data;

      //   //Store token in localstorage
      //   sessionStorage.setItem("user_id", data.InsertedId);
      //   localStorage.setItem("newUserEmail", JSON.stringify(email));
      //   localStorage.setItem("userUserPassword", JSON.stringify(password));

      // })
      // .catch(error => {
      //   const { data } = error.response;
      //   setShowDialog(false);

      //   RegExp(/Users with email/).test(data.message) &&
      //     setemailerror("This email is already in use");

      //   !RegExp("Users with email").test(data.message) &&
      //     seterror(data.message);
      // });
      const data = {
        username: user.username,
        // email: user.email,
        password: user.password,
      };

      dispatch(handleLoginUser(data));
    //   Store token in localstorage
    //   sessionStorage.setItem("user_id", data.InsertedId);
      localStorage.setItem("newUserEmail", JSON.stringify(user.email));
      localStorage.setItem("userUserPassword", JSON.stringify(user.password));

      toast.success("Login successful", {
        position: "bottom-left",
      });
      history.push("/");
    },
  });

  return (
    <Flex flexDirection="column">
      <Text align="center" fontSize="4xl" mt={20}>
        Sign In to Your Account
      </Text>
      <HStack alignSelf="center" mt={3} mb={3}>
        <Image src={facebookIcon} />
        <Image src={googleIcon} />
        <Image src={linkedInIcon} />
      </HStack>
      <Stack direction="row" alignItems="center" pr={4} pl={4}>
        <Divider color="#000000" orientation="horizontal" />
        <Text alignSelf="center" fontWeight="500" p={2}>
          OR
        </Text>
        <Divider orientation="horizontal" />
      </Stack>
      <Text align="center" fontSize="md">
        Sign in with your email address
      </Text>
      <VStack spacing="15px" pl={20} pr={20} pt={4} pb={4}>
      <FormControl id="username" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<IoIosPerson h={4} w={4} color="gray.300" />}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Username"
              type="text"
              value={user.username || ""}
              onChange={handleChange("username")} 
            />
          </InputGroup>
          {errors.username && <FormHelperText>{errors.username}</FormHelperText>}
        </FormControl>
        <FormControl id="email" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiOutlineMail color="gray.300" />}
            />
            <Input
              variant="filled"
              size="md"
              placeholder="Enter Email Address"
              type="email"
              value={user.email || ""}
              onChange={handleChange("email")}
            />
          </InputGroup>
          {errors.email && <FormHelperText {...style}>{errors.email}</FormHelperText>}
        </FormControl>
        <FormControl id="password" isRequired>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BiLockAlt color="gray.300" />}
            />
            <Input
              variant="filled"
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              size="md"
              value={user.password || ""}
              onChange={handleChange("password")}
            />
            <InputRightElement width="4.5rem">
              {show ? (
                <IconButton
                  as={BiShowAlt}
                  variant="untyled"
                  h={5}
                  w={5}
                  onClick={handleClick}
                ></IconButton>
              ) : (
                <IconButton
                  as={BiHide}
                  h={5}
                  w={5}
                  variant="unstyled"
                  onClick={handleClick}
                ></IconButton>
              )}
            </InputRightElement>
            {errors.password && <FormHelperText {...style}>{errors.password}</FormHelperText>}
          </InputGroup>
        </FormControl>
      </VStack>
      <Flex mb={4} alignContent="center" pl={20} pr={20}>
        <Spacer />
        <Button
          onClick={() => history.push("/forgot-password")}
          variant="link"
          color="black"
          fontSize="xs"
        >
          Forgot Password?
        </Button>
      </Flex>
      <Button
        alignSelf="center"
        padding="10px"
        background="#007ACC"
        borderRadius="50px"
        width="300px"
        height="35px"
        color="#ffffff"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
      <Text align="center" mt={4} fontSize="xs">
        Don't have an account?
        <Link to="/sign-up">
          <Box as="span" textColor="#007ACC">
            {" "}
            Sign up{" "}
          </Box>
        </Link>
      </Text>
    </Flex>
  );
};

export default SignInForm;
