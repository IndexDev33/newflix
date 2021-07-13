import React from "react";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import styled from "styled-components";

const LangSelectionContainer = styled.div`
  display: inline-block;
  /* margin: 0 0.75rem; */
  /* border: 1px solid inherit; */
  /* background-color: red; */
  /* width: 50%; */
  /* justify-self: center; */
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
  line-height: 1.6em;
  background: rgba(0, 0, 0, 0.4);
  /* border: 1px solid inherit; */
  color: inherit;
  font-size: 0.875rem;
  padding: 0.2rem 2rem;
  -webkit-appearance: none;
`;

export default function Lang() {
  return (
    <LangSelectionContainer>
      <LangPicker>
        <IconLangSelect>
          <LanguageIcon />
          <ArrowDropDownIcon style={{ fontSize: 30 }} />
        </IconLangSelect>
        <SelectLang>
          <SelectLangList
            defaultValue="English"
            tabindex="0"
            placeholder="lang-switcher"
          >
            <option lang="es">Español</option>
            <option>English</option>
          </SelectLangList>
        </SelectLang>
      </LangPicker>
    </LangSelectionContainer>
  );
}
