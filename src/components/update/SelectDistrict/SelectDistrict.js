import { Button, FormControl, Menu, MenuItem } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { allDistricts } from "../../../utils/constants";
import BottomLogo from "../BottomLogo/BottomLogo";

const SelectDistrict = () => {
  const DISTRICT_IMAGE = "/bg/01-05.png";
  const [anchorEl, setAnchorEl] = useState(null);
  const [district, setDistrict] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container backgroundImg={DISTRICT_IMAGE}>
      <main>
        <h1>DISTRICT</h1>
        <FormControl
          color="secondary"
          component="fieldset"
          className="form-control">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            color="secondary"
            variant="contained"
            style={{ width: "fit-content", margin: "0" }}
            onClick={handleClick}>
            {district ? district : "Select District"}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            {allDistricts.map((district, key) => (
              <MenuItem
                key={key}
                onClick={() => {
                  handleClose();
                  setDistrict(district);
                }}>
                {district}
              </MenuItem>
            ))}
          </Menu>
        </FormControl>
      </main>
      <BottomLogo />
    </Container>
  );
};

export default SelectDistrict;

const Container = styled.div`
  ${({ backgroundImg }) => `background-image: url(${backgroundImg})`};
  background-position: center;
  background-size: contain;
  /* background-repeat: no-repeat; */
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 2px black solid; */
  > main {
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    flex: 1;
    padding-top: 30vh;

    > h1 {
      font-size: 2.5rem;
      color: white;
      font-weight: bold;
    }
    .form-control {
      align-items: center;
      background-color: #dc2529;
      > button {
        background-color: #dc2529;
        font-size: medium;
        border: 1px solid white;
        padding: 0.5pc 1pc;
        border-radius: 5pc;
      }
    }
  }
  @media screen and (max-width: 500px) {
    background-repeat: no-repeat;
    background-size: cover;
    > main {
      > h1 {
        font-size: 2rem;
        color: white;
        font-weight: bold;
      }
      .form-control {
        > button {
          border: 1px solid white;
          padding: 0.2pc 1pc;
          border-radius: 5pc;
        }
      }
    }
  }
`;
