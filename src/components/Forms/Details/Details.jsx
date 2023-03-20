import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

function Details() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  const renderError = (message) => (
    <p className="italic text-red-600">{message}</p>
  );

  const ValidationSchema = yup.object().shape({
    requirements: yup.string().required(),
    duties: yup.string(),
    payment: yup.string(),
    etc: yup.string(),
  });

  const handleClick = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };

  return (
    <Formik
      initialValues={{
        requirements: "",
        duties: "",
        payment: "",
        etc: "",
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
          <label className="font-medium text-gray-900">
            Требования к кандидату
          </label>
          <Field
            name="requirements"
            className="rounded-md border-2 p-2"
            placeholder="My Workspace"
          />
        </div>
        <ErrorMessage name="requirements" render={renderError} />
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Служебные обязанности
          </label>
          <Field
            name="duties"
            className="rounded-md border-2 p-2"
            placeholder="необязательно"
          />
        </div>
        <ErrorMessage name="duties" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">Заработная плата</label>
          <Field
            name="payment"
            className="rounded-md border-2 p-2"
            placeholder="необязательно, можно указать «вилку» или «от...»"
          />
        </div>
        <ErrorMessage name="payment" render={renderError} />
        {/* ============================================================= */}
        <div className="flex flex-col items-start mb-2">
          <label className="font-medium text-gray-900">
            Дополнительная информация
          </label>
          <Field
            name="etc"
            className="rounded-md border-2 p-2"
            placeholder="любая другая информация: особенности позиции, информация о компании, «соцпакет» и др."
          />
        </div>
        <ErrorMessage name="etc" render={renderError} />
        {/* ============================================================= */}
        <button
          className="rounded-md bg-indigo-500 font-medium text-white my-2 p-2"
          type="button"
          onClick={handleClick}
        >
          Назад
        </button>
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

export default Details;
