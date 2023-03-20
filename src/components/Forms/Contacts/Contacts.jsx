import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Contacts() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    contact: yup.string().required(),
    position: yup.string(),
    email: yup.string().email(),
    phone: yup.string(),
    telegram: yup.string(),
    address: yup.string(),
  });

  const handleClick = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };

  return (
    <Formik
      initialValues={{
        contact: "",
        position: "",
        email: "",
        phone: "",
        telegram: "",
        address: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        const data = { ...formData, ...values };
        setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      <Form className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Контактное лицо</label>
          <Field
            name="contact"
            className="rounded-md border-2 p-2"
            placeholder="My Workspace"
          />
        </div>
        <ErrorMessage name="contact" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Должность</label>
          <Field
            name="position"
            className="rounded-md border-2 p-2"
            placeholder="необязательно"
          />
        </div>
        <ErrorMessage name="position" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Электронная почта</label>
          <Field
            name="email"
            className="rounded-md border-2 p-2"
            placeholder="необязательно"
          />
        </div>
        <ErrorMessage name="email" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Телефон</label>
          <Field
            name="phone"
            className="rounded-md border-2 p-2"
            placeholder="необязательно"
          />
        </div>
        <ErrorMessage name="phone" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Телеграм</label>
          <Field
            name="telegram"
            className="rounded-md border-2 p-2"
            placeholder="необязательно"
          />
        </div>
        <ErrorMessage name="telegram" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Адрес с описанием вакансии
          </label>
          <Field
            name="address"
            className="rounded-md border-2 p-2"
            placeholder="необязательно"
          />
        </div>
        <ErrorMessage name="address" render={renderError} />
        {/* ============================================================= */}
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="submit"
        >
          Далее
        </button>
      </Form>
    </Formik>
  );
}

export default Contacts;
