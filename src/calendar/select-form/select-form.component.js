import React from "react";

import { GroupComponent, SelectComponent } from "../../form";
import { ButtonComponent } from "../../button";

export const SelectFormComponent = ({ options, selected, pick, select }) => (
  <div>
    <GroupComponent title={"Choose a Calendar"}>
      <div className="mb2">
        <SelectComponent
          options={options}
          emptyLabel={"- Select a calendar -"}
          emptyValue={""}
          changed={select}
          value={selected}
        />
      </div>
      <ButtonComponent action={pick} disabled={!selected}>
        Use this calendar
      </ButtonComponent>
    </GroupComponent>
  </div>
);
