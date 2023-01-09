import React from "react";
import { Link } from "react-router-dom";
import { Flex, Spacer, Center, Text, Box, Square } from "@chakra-ui/react";

export const Header = () => {
    return (
        <Flex color='white'>
            <Box p="4" bg="red.400">
                <Link to="/">Toy</Link>
            </Box>
            <Spacer />
            <Box p="4" bg="green.400">
                <Flex gap='10'>
                    <Box >
                        <Link to="/">事前アンケート</Link>
                    </Box>
                    <Box>
                        <Link to="/posts">アンケート</Link>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    );
};
