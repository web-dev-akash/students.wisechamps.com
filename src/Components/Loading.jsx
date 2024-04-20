import React from "react";
import { RaceBy } from "@uiball/loaders";
export const Loading = () => {
  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "90vh",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          width: "90%",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Loading Please Wait...
      </p>
      <RaceBy
        size={300}
        lineWeight={20}
        speed={1.4}
        color="rgba(129, 140, 248)"
      />
      {/* ------------------Skeleton Loading-------------------- */}
      {/* <Box padding={"2.3rem 11px 1rem 11px"} overflow={"hidden"} height={"100vh"}>
  <Box>
    <header
      className="animate__animated animate__fadeInLeft"
      style={{
        position: "absolute",
        top: "0.6rem",
        left: "11px",
      }}
    >
      <Skeleton borderRadius={"5px"} width={"120px"} height={"30px"} />
    </header>
    <Box
      className="animate__animated animate__fadeInRight"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"5px"}
      position={"absolute"}
      top={"12px"}
      right={"11px"}
    >
      <Skeleton borderRadius={"5px"} width={"100px"} height={"28px"} />
      <Skeleton borderRadius={"5px"} width={"70px"} height={"28px"} />
    </Box>
  </Box>
  <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"flex-end"}
    gap={"5px"}
    mt={"12px"}
  >
    <Skeleton borderRadius={"5px"} width={"80px"} height={"28px"} />
    <Skeleton borderRadius={"5px"} width={"70px"} height={"28px"} />
    <Skeleton borderRadius={"5px"} width={"120px"} height={"28px"} />
  </Box>
  <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"space-between"}
    margin={"20px 0"}
  >
    <Box display={"flex"} gap={"5px"}>
      <Heading
        fontSize={["20px", "20px", "25px", "25px", "25px"]}
        fontWeight={400}
        textTransform={"capitalize"}
      >
        <Skeleton borderRadius={"5px"} width={"140px"} height={"40px"} />
      </Heading>
    </Box>
    <Skeleton borderRadius={"5px"} width={"70px"} height={"30px"} />
  </Box>
  <Box
    display={"grid"}
    gridTemplateColumns={[
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 1fr)",
    ]}
    gap={["10px", "10px", "20px", "20px"]}
    mt={"20px"}
  >
    <Skeleton borderRadius={"5px"} width={"100%"} height={"200px"} />
    <Skeleton borderRadius={"5px"} width={"100%"} height={"200px"} />
    <Skeleton borderRadius={"5px"} width={"100%"} height={"200px"} />
  </Box>
</Box>; */}
    </div>
  );
};
