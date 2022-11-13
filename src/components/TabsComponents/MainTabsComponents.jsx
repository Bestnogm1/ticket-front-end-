import React from "react";
import * as Chakra from "@chakra-ui/react";
import DescriptionTab from "./DescriptionTab";
import CommentsTabs from "./CommentsTabs";

function MainTabsComponents({ ticketDescription, ticketDetailId }) {
  return (
    <Chakra.Tabs>
      <Chakra.TabList>
        <Chakra.Tab>Description</Chakra.Tab>
        <Chakra.Tab>Comments</Chakra.Tab>
      </Chakra.TabList>
      <Chakra.TabPanels>
        <Chakra.TabPanel>
          <DescriptionTab ticketDescription={ticketDescription} />
        </Chakra.TabPanel>
        <Chakra.TabPanel>
          <CommentsTabs ticketDetailId={ticketDetailId} />
        </Chakra.TabPanel>
      </Chakra.TabPanels>
    </Chakra.Tabs>
  );
}

export default MainTabsComponents;
