import React from "react";

import {
  GroupComponent,
  DescriptionComponent,
  TextInputComponent,
  LabelComponent
} from "../../form";
import { ButtonComponent } from "../../button";

export const CreateFormComponent = ({ name, changed, create }) => (
  <div>
    <GroupComponent title={"Create Calendar"}>
      <div className="mb2">
        <LabelComponent forInput={"calendar_name"}>
          Calendar Name
        </LabelComponent>
        <DescriptionComponent>
          Enter a name for the calendar to create
        </DescriptionComponent>
        <TextInputComponent
          changed={event => changed(event.target.value)}
          value={name}
          name={"calendar_name"}
          id={"calendar_name"}
          placeholder={"e.g. Work"}
        />
      </div>
      <ButtonComponent action={create}>Create</ButtonComponent>
    </GroupComponent>
  </div>
);
