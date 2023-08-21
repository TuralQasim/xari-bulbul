import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { connect } from "react-redux";

const AccordionList = ({ data, words, dinWords, language }) => {
  const [open, setOpen] = useState("");
  const word = dinWords[language].accList;
  console.log(word);
  return (
    <>
      <Accordion
        words={words}
        title={word.consist}
        open={open}
        details={data.consist}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
      <Accordion
        title={word.delivery}
        words={words}
        open={open}
        details={words.details1}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
      <Accordion
        title={word.pay}
        words={words}
        open={open}
        details={words.details2}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
      <Accordion
        words={words}
        title={word.refund}
        open={open}
        details={words.details3}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
    </>
  );
};

const t = (a) => a;
export default connect(t)(AccordionList);
