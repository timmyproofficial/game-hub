import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import d818svg from '../assets/D818 - SVG.svg';
import d818png from '../assets/D818 - PNG.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={d818svg} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
