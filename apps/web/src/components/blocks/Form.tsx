"use client";
import React, {useState} from "react";
import {FormBlock, FormField, FormFieldType, FormOnScuccess} from "types";
import {BlockWrapper, BlockTitle} from "../Block";
import {client} from "api";
import {Notification} from "@/components/Notification";
import {Button} from "@/components/Button";
import {clsx} from "clsx";

interface FormFieldProps extends FormField {
  onChange: (name: string, value: any) => void;
  value?: any;
}

function FormInputElement(props: FormFieldProps) {
  const {type, name, required, value = ""} = props;

  const className =
    "block w-full bg-bg-light ring-primary py-1.5 text-gray-300 shadow-sm ring-1 ring-inset  placeholder:text-gray-400 sm:text-sm sm:leading-6 px-4";

  const commonProps = {
    name,
    id: name,
    required,
    autoComplete: name,
    className,
  };

  switch (type) {
    case FormFieldType.checkbox:
      return (
        <input
          {...commonProps}
          type="checkbox"
          className={clsx(className, "ring-0")}
          onChange={(e) => {
            props.onChange(name, e.target.checked);
          }}
        />
      );

    case FormFieldType.textarea:
      return (
        <textarea
          rows={8}
          {...commonProps}
          value={value}
          onChange={(e) => {
            props.onChange(name, e.target.value);
          }}
        />
      );

    default:
      return (
        <input
          {...commonProps}
          type={type}
          value={value}
          onChange={(e) => {
            props.onChange(name, e.target.value);
          }}
        />
      );
  }
}

export function FormFieldElement(props: FormFieldProps) {
  const {name, width, type, label} = props;

  let className = "col-span-full";

  switch (type) {
    case FormFieldType.checkbox:
      className =
        "col-span-full flex gap-x-3 items-center flex-row-reverse justify-end";
      break;

    default:
      className =
        width?.toString() === "100" ? "col-span-full" : "sm:col-span-3";
      break;
  }

  return (
    <div className={className} key={name}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        {label}
      </label>
      <div className="flex">
        <FormInputElement {...props} />
      </div>
    </div>
  );
}

interface FormProps extends FormBlock {}

export function Form(props: FormProps) {
  const {title, form} = props;
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotificaiton] = useState(false);
  const [data, setData] = useState<any>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    await client.sendForm(data, form.id);
    if (form.on_success === FormOnScuccess.message) {
      setShowNotificaiton(true);
    }
    setData({});
    setLoading(false);
  };

  const onChange = (name: string, value: any) => {
    setData((prev: any) => ({...prev, [name]: value}));
  };

  return (
    <BlockWrapper>
      <BlockTitle title={title} />
      <form className="flex-1" action="#" onSubmit={onSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {form.schema.map((field: FormField, index: number) => (
            <FormFieldElement
              value={data[field.name]}
              onChange={onChange}
              key={index}
              {...field}
            />
          ))}
        </div>
        <div className="mt-10">
          <Button
            className="text-center text-white px-4"
            type="submit"
            loading={loading}
          >
            {form.submit_label}
          </Button>
        </div>
      </form>
      <Notification title={form.success_message} show={showNotification} />
    </BlockWrapper>
  );
}

export default Form;
