import InputError from "@/Components/InputError.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {useForm} from "@inertiajs/react"
import Feature from "@/Components/Feature.jsx";

export default function Index({feature, answer}) {

    const {data, setData, post, reset, errors, processing} = useForm({
        number1: "",
        number2: "",
    });

    const submit = (e) => {
        e.preventDefault()

        post(route("feature2.calculate"), {
            onSuccess() {
                reset();
            },
        });
    };

    return (
        <Feature feature={feature} answer={answer}>
            <form onSubmit={submit} className="pb-8 grid grid-cols-2 gap-3">
                <div className="ml-5">
                    <InputLabel htmlFor="number1" value="Number 1" className="mt-5"/>

                    <TextInput
                        id="number1"
                        type="text"
                        name="number1"
                        value={data.number1}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("number1", e.target.value)}
                    />

                    <InputError message={errors.number1} className="mt-2"/>
                </div>

                <div className="mr-5">
                    <InputLabel htmlFor="number2" value="Number 2" className="mt-5"/>

                    <TextInput
                        id="number2"
                        type="text"
                        name="number2"
                        value={data.number2}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("number2", e.target.value)}
                    />

                    <InputError message={errors.number2} className="mt-2"/>
                </div>

                <div className="flex items-center justify-end mt-4 col-span-2">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Calculate
                    </PrimaryButton>
                </div>
            </form>
        </Feature>
    )
}
