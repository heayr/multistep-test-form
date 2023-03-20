import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { FormContext } from "../../../App";
import * as yup from "yup";

const AddVacancy = () => {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  const handleClick = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };

  return (
    <div>
      <Formik
        initialValues={{
          toggle: false,
          checked: [],
        }}
        onSubmit={(values) => {
          const data = { ...formData, ...values };
          setFormData(data);
          alert(JSON.stringify(data, null, 2));
        }}
      >
        {({ values }) => (
          <Form>
            {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
            <div id="checkbox-group">Требуемые услуги агентства</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Размещение вакансии
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Two" />
                Рассылка по базе кандидатов
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Three" />
                Подбор кандидатов
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Four" />
                Готовы оплачивать услуги
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Five" />
                Свяжитесь со мной
              </label>
            </div>
            <div className="flex flex-col items-start mb-2">
              <label className="font-medium text-gray-900">
                Комментарии к заявке
              </label>
              <p>что еще нам нужно знать о вакансии?</p>
              <Field
                as="textarea"
                name="comments"
                className="rounded-md border-2 "
                placeholder=""
              />
            </div>
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
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddVacancy;
