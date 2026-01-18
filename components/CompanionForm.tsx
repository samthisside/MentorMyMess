"use client";

import React from 'react';

import * as z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm, Controller} from "react-hook-form"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import {Input} from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import {subjects} from "@/constants";
import {Textarea} from "@/components/ui/textarea";

const formSchema = z.object({
    // title: z
    //     .string()
    //     .min(5, "Bug title must be at least 5 characters.")
    //     .max(32, "Bug title must be at most 32 characters."),
    // description: z
    //     .string()
    //     .min(20, "Description must be at least 20 characters.")
    //     .max(100, "Description must be at most 100 characters."),

    name:
        z.string()
            .min(1, "Name is required")
            .max(30, "Maximum number of characters is 30"),
    subject:
        z.string()
            .min(1, "Subject is Required")
            .max(30, "Maximum number of characters is 30"),
    topic:
        z.string()
            .min(1, "Topic is Required")
            .max(30, "Maximum number of characters is 30"),
    voice:
        z.string()
            .min(1, "Voice is Required")
            .max(30, "Maximum number of characters is 30"),
    style:
        z.string()
            .min(1, "Style is Required")
            .max(30, "Maximum number of characters is 30"),
    duration:
        z.coerce.number()
            .min(1, "Duration is Required")
            .max(60, "Maximum Duration is 60"),
})


const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: "15",
        },
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        console.log(data)
    }

    return (
        <Card className="w-full sm:max-w-md">
            {/*<CardHeader>*/}
            {/*    <CardTitle>Bug Report</CardTitle>*/}
            {/*    <CardDescription>*/}
            {/*        Help us improve by reporting bugs you encounter.*/}
            {/*    </CardDescription>*/}
            {/*</CardHeader>*/}
            <CardContent>
                <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>
                        <Controller
                            name="name"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Companion Name
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter Your Companion Name"
                                        autoComplete="off"
                                        className='input'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="subject"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Subject Name
                                    </FieldLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input capitalize">
                                            <SelectValue placeholder="Select a subject"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {/*<SelectGroup>*/}
                                            {/*    <SelectLabel>Fruits</SelectLabel>*/}
                                            {/*    <SelectItem value="apple">Apple</SelectItem>*/}
                                            {/*    <SelectItem value="banana">Banana</SelectItem>*/}
                                            {/*    <SelectItem value="blueberry">Blueberry</SelectItem>*/}
                                            {/*    <SelectItem value="grapes">Grapes</SelectItem>*/}
                                            {/*    <SelectItem value="pineapple">Pineapple</SelectItem>*/}
                                            {/*</SelectGroup>*/}
                                            <SelectGroup>
                                                {subjects.map((subject) => (
                                                    <SelectItem value={subject} key={subject}>{subject}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="topic"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        What Should The Companion Teach?
                                    </FieldLabel>
                                    <Textarea
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Enter the Topic You Want To Learn"
                                        autoComplete="off"
                                        className='input'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />



                        <Controller
                            name="voice"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Voice
                                    </FieldLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input ">
                                            <SelectValue placeholder="Select a Companion Voice"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value='male'>Male</SelectItem>
                                                <SelectItem value='female'>Female</SelectItem>

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />

                        <Controller
                            name="style"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Style
                                    </FieldLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="input ">
                                            <SelectValue placeholder="Select a Companion Style"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value='formal'>Formal</SelectItem>
                                                <SelectItem value='casual'>Casual</SelectItem>

                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />
                        <Controller
                            name="duration"
                            control={form.control}
                            render={({field, fieldState}) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="form-rhf-demo-title">
                                        Define Duration
                                    </FieldLabel>
                                    <Input
                                        {...field}
                                        id="form-rhf-demo-title"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="15"
                                        autoComplete="off"
                                        className='input'
                                        type='number'
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]}/>
                                    )}
                                </Field>
                            )}
                        />
                    </FieldGroup>
                </form>
            </CardContent>
            <CardFooter>
                <Field orientation="horizontal">
                    <Button type="submit" form="form-rhf-demo" className='w-full cursor-pointer'>
                        Build Your Companion
                    </Button>
                </Field>
            </CardFooter>
        </Card>
    );
};

export default CompanionForm;