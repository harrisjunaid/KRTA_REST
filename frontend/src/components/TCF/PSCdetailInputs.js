import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { Editor } from '@tinymce/tinymce-react';

const PSCdetailInput = (values = {}) => {
  return (
    <>
      <FieldArray name="actions">
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={name}>
              <label>Sub Item #{index + 1}</label>
              <Field
                name={`${name}.subItem`}
                component="input"
                placeholder="sub Item"
              />              
              <Field name={`${name}.subAction`}>
        {({ input: {onChange, value}}) => (
          <Editor tinymceScriptSrc={process.env.PUBLIC_URL + '/tinymce/tinymce.min.js'}
          value={value + ''} init={{height: "320",
          resize: true, menubar: false,
        }} onEditorChange = {(e) => onChange(e)} />
        )}
      </Field>

              <span
                onClick={() => fields.remove(index)}
                style={{ cursor: "pointer" }}
              >
                ❌
              </span>
            </div>
          ))
        }
      </FieldArray>
    </>
  );
};

export default PSCdetailInput;
