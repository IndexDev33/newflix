import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styled from "styled-components";
import { useRouter } from "next/router";

const LangSelectionContainer = styled.div`
  display: inline-block;
`;

const LangPicker = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
`;

const SelectLang = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const IconLangSelect = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  pointer-events: none;
  padding: 0 0.3rem;
`;

const SelectLangList = styled.select`
  border: solid 1px rgba(255, 255, 255, 0.3);
  line-height: 1.6em;
  background: ${(props) => (props.bgColor ? "unset" : "rgba(0, 0, 0, 0.4)")};
  color: inherit;
  font-size: 0.875rem;
  padding: ${(props) => (props.big ? "0.7rem 2.5rem" : "0.2rem 2rem")};
  -webkit-appearance: none;
`;

export default function Lang({ big }) {
  const { pathname } = useRouter();
  return (
    <LangSelectionContainer>
      <LangPicker>
        <IconLangSelect>
          <LanguageIcon />
          <ArrowDropDownIcon style={{ fontSize: 30 }} />
        </IconLangSelect>
        <SelectLang>
          <SelectLangList
            bgColor={pathname === "/signup"}
            defaultValue="English"
            tabindex="0"
            placeholder="lang-switcher"
            big={big}
          >
            <option lang="es">Español</option>
            <option lang="en">English</option>
          </SelectLangList>
        </SelectLang>
      </LangPicker>
    </LangSelectionContainer>
  );
}
