import React from "react";
import { Box, Text } from "@chakra-ui/react";

function TopicCard({ id, isSelected, title, onSelectClickHandler }) {
  return (
    <Box
      boxShadow={isSelected ? "lg" : "xs"}
      className={isSelected ? "topic__card active" : "topic__card"}
      m="4"
      p="4"
      onClick={() => onSelectClickHandler(id)}
    >
      <svg
        width="109"
        height="109"
        viewBox="0 0 109 109"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="54.5" cy="54.5" r="54.5" />
        <path d="M82.1339 36.4176C82.1301 36.4176 82.1264 36.4176 82.1228 36.4176H78.3613V35.1305C78.3815 34.6211 78.052 34.1632 77.5624 34.0209C74.951 33.3366 72.2619 32.9934 69.5623 33.0001C65.1239 33.0001 59.0767 33.9987 54.6051 38.548C50.1667 33.9543 44.0751 33.0001 39.6479 33.0001C36.9483 32.9934 34.2592 33.3366 31.6478 34.0209C31.1582 34.1632 30.8286 34.6211 30.8489 35.1305V36.4065H27.1096C26.4968 36.4065 26 36.9033 26 37.5161V72.9562C26 73.569 26.4968 74.0658 27.1096 74.0658C27.3002 74.0652 27.4874 74.0156 27.6533 73.9215C27.7642 73.8661 38.8601 67.7966 54.3499 71.7024H54.5163H54.6162C54.7047 71.7131 54.794 71.7131 54.8825 71.7024C70.4166 67.7634 81.5125 73.8217 81.5791 73.9215C81.9223 74.1197 82.3454 74.1197 82.6886 73.9215C83.0298 73.7246 83.2411 73.3613 83.2434 72.9673V37.5272C83.2434 36.9144 82.7468 36.4176 82.1339 36.4176ZM28.2192 71.192V38.6368H30.8711V66.4651C30.8641 67.0779 31.3553 67.5803 31.968 67.5872C32.028 67.5879 32.0879 67.5837 32.1471 67.5747C34.4425 67.2242 36.7601 67.0388 39.082 67.0199C42.2984 66.9642 45.5014 67.448 48.5578 68.4513C41.6555 67.6166 34.6543 68.56 28.2192 71.192ZM39.082 64.8119C37.0638 64.8164 35.048 64.9461 33.0459 65.2002V36.0071C35.2062 35.5258 37.4123 35.2802 39.6257 35.2747C43.7755 35.2747 49.501 36.229 53.4733 40.7117L53.5066 68.3514C51.1987 66.8424 46.6937 64.8119 39.082 64.8119ZM55.7258 40.7117C59.6981 36.2734 65.4235 35.2747 69.5734 35.2747C71.7866 35.2813 73.9927 35.5268 76.1532 36.0071V65.2002C74.1623 64.9438 72.1576 64.8103 70.1503 64.8008C62.583 64.8008 58.067 66.8313 55.7258 68.3403V40.7117ZM81.0132 71.192C74.5643 68.5528 67.547 67.6093 60.6301 68.4513C63.701 67.4444 66.9192 66.9604 70.1503 67.0199C72.4869 67.033 74.8193 67.2147 77.1296 67.5636C77.7355 67.6556 78.3012 67.2389 78.3932 66.6331C78.4022 66.5739 78.4063 66.514 78.4057 66.454V38.6368H81.0576L81.0132 71.192Z" />
      </svg>
      <Text mt="2" textAlign="center">
        {title}
      </Text>
    </Box>
  );
}

export default TopicCard;