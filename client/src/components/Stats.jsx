import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

import React from "react";

function Stats(prpos) {
  return (
    <div className="stats">
      <StatGroup>
        <Stat size="lg">
          <StatLabel>Mean</StatLabel>
          <StatNumber>{prpos.mean}</StatNumber>
        </Stat>
        <Stat size="lg">
          <StatLabel>Median</StatLabel>
          <StatNumber>{prpos.median}</StatNumber>
        </Stat>
        <Stat size="lg">
          <StatLabel>Standard Deviation</StatLabel>
          <StatNumber>{prpos.sd}</StatNumber>
        </Stat>

        <Stat size="lg">
          <StatLabel>Mode</StatLabel>
          <StatNumber>{prpos.mode}</StatNumber>
        </Stat>
      </StatGroup>
    </div>
  );
}

export default Stats;
