import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date</MenuItem>
        <MenuItem>sdfsdf</MenuItem>
        <MenuItem>sdfs</MenuItem>
        <MenuItem>sdfsdf</MenuItem>
        <MenuItem>343</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
