import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import styled, { css } from 'styled-components';

// Styled components for styling
const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn('#ffffff', '#d5d5d5')} color: #555;
`;

const btnPrimary = btn('#4f93ce', '#285f8f');

const StyledForm = styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
  }

  form {
    max-width: 500px;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      margin: 5px;
      & > label {
        color: #333;
        width: 110px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 3px 5px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }
    button {
      margin: 0 10px;
      &[type='submit'] {
        ${btnPrimary};
      }
      &[type='button'] {
        ${btnDefault};
      }
    }
    pre {
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
  }
`;

const FinalForm = () => {
  const [formData, setFormData] = useState(null);

  const onSubmit = (values) => {
    setFormData(values);
    window.alert(`Data berhasil di-submit:\n\n${JSON.stringify(values, null, 2)}`);
  };

  const handleReset = (form) => {
    form.reset();
    setFormData(null); // Menghilangkan data yang ditampilkan
  };

  return (
    <StyledForm>
      <h1>Black Ridge Form</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field name="firstName">
                {({ input }) => (
                  <input {...input} placeholder="First Name" />
                )}
              </Field>
            </div>
            <div>
              <label>Last Name</label>
              <Field name="lastName">
                {({ input }) => (
                  <input {...input} placeholder="Last Name" />
                )}
              </Field>
            </div>
            <div>
              <label>Employed</label>
              <Field name="employed" type="checkbox">
                {({ input }) => (
                  <input {...input} type="checkbox" />
                )}
              </Field>
            </div>
            <div>
              <label>Education</label>
              <Field name="education" component="select">
                <option value="" disabled>Select your education level</option>
                <option value="highSchool">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </Field>
            </div>
            <div>
              <label>Expertise</label>
              <div>
                <label>
                  <Field name="expertiseHTML" component="input" type="checkbox" />
                  HTML
                </label>
                <label>
                  <Field name="expertiseCSS" component="input" type="checkbox" />
                  CSS
                </label>
                <label>
                  <Field name="expertiseJS" component="input" type="checkbox" />
                  JavaScript
                </label>
                <label>
                  <Field name="expertiseNodejs" component="input" type="checkbox" />
                  Node.js
                </label>
                <label>
                  <Field name="expertiseReactjs" component="input" type="checkbox" />
                  React.js
                </label>
              </div>
            </div>
            <div>
              <label>Preferred Technology</label>
              <div>
                <label>
                  <Field name="technology" component="input" type="radio" value="frontEnd" />
                  Front End
                </label>
                <label>
                  <Field name="technology" component="input" type="radio" value="backEnd" />
                  Back End
                </label>
                <label>
                  <Field name="technology" component="input" type="radio" value="fullstack" />
                  Fullstack
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes">
                {({ input }) => (
                  <textarea {...input} placeholder="Notes" />
                )}
              </Field>
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={() => handleReset(form)}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
          </form>
        )}
      />

      {formData && (
        <div>
          <h2>Form Data Submitted:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </StyledForm>
  );
};

export default FinalForm;
