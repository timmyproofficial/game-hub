import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import d818svg from '../assets/D818 - SVG.svg';
import d818png from '../assets/D818 - PNG.png';

const NavBar = () => {
  return (
    <HStack>
      <Image src={d818svg} boxSize="60px" />
      <Text>D818 Restaurant</Text>
    </HStack>
  );
};

export default NavBar;
