import { useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "../buttons/Buttons";
import styles from "./CloseQueryForm.module.scss";

const reasons = [
  "Query resolved outside the platform",
  "Query no longer relevant",
  "Query resolved outside the platform",
  "Query no longer relevant",
];

function RadioGroup({ name, id, value, labelText, onClick }) {
  return (
    <label className={styles.radioGroupLabel} htmlFor={id}>
      <input
        className={styles.radioGroupInput}
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={onClick}
      />
      {labelText}
    </label>
  );
}
function TextInput({ id, name, placeholder }) {
  return (
    <input
      className={styles.textInput}
      id={id}
      name={name}
      type="text"
      placeholder={placeholder}
    />
  );
}

export default function CloseQueryForm({ closeModal, data }) {
  const [otherReason, setOtherReason] = useState(false);

  function handleFormSubmission() {
    let options = document.getElementsByClassName(styles.radioGroupInput);
    let selected = null;
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        selected = options[i];
        break;
      }
    }

    if (!selected) return alert("Please select a reason");

    if (selected.value === 'other') {
      let otherReason = document.getElementsByClassName(styles.textInput)[0];
      selected.value = "other: " + otherReason.value;
    }
    else {
      selected.value = reasons[selected.value];
    }

    const submissionData = {
      ...data,
      reason : selected.value
    }

    console.log(submissionData);
    closeModal();
  }

  return (
    <>
      <h3 className={styles.closeQueryTitle}>Tell us the reason</h3>
      <div className={styles.reasons}>
        {reasons.map((reason, index) => (
          <RadioGroup
            name="reason"
            value={index}
            id={"reason" + index}
            labelText={reason}
            key={index}
            onClick={() => setOtherReason(false)}
          />
        ))}
        <RadioGroup
          name="reason"
          id="other"
          value="other"
          labelText="Other"
          onClick={() => setOtherReason(true)}
        />
        {otherReason && (
          <TextInput id="other" name="reason" placeholder="Enter your reason" />
        )}
      </div>
      <div className={styles.buttonGroup}>
        <ButtonSecondary onClick={closeModal}>Cancel</ButtonSecondary>
        <ButtonPrimary onClick={handleFormSubmission}>Close Query</ButtonPrimary>
      </div>
    </>
  );
}
