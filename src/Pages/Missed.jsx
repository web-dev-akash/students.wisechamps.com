import { Box } from "@chakra-ui/react";
import { Header } from "../Components/Header";

export const Missed = () => {
  const link = new URLSearchParams(window.location.search).get("link");

  return (
    <Box minHeight={"100vh"}>
      <Header bgWhite={true} hidetags={true} />
      <Box minHeight={"110vh"} mt={"-40px"} mb={"50px"} height={"100%"}>
        <iframe
          id="vevox"
          name="vevox"
          style={{
            minHeight: "110vh",
            zIndex: 9,
          }}
          width={"100%"}
          height={"100%"}
          title={"Vevox Quiz"}
          src={link}
        />
      </Box>
    </Box>
  );
};
