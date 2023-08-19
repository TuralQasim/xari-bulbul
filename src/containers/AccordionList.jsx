import React, { useState } from "react";
import Accordion from "../components/Accordion";

const AccordionList = ({ data, words }) => {
  const [open, setOpen] = useState("");
  return (
    <>
      <Accordion
        words={words}
        title="Состав"
        open={open}
        details={data.consist}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
      <Accordion
        title="Доставка"
        words={words}
        open={open}
        details={words.details1}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
      <Accordion
        title="Оплата"
        words={words}
        open={open}
        details={words.details2}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
      <Accordion
        words={words}
        title="Правила возврата"
        open={open}
        details={words.details3}
        onChange={setOpen}
        imgSrc={"./icons/consist.svg"}
      />
    </>
  );
};

export default AccordionList;
