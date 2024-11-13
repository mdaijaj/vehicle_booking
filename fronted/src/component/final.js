import { useState } from "react";
import Step1 from "./question/step1";
import Step2 from "./question/step2";
import Step3 from "./question/step3";
import Step4 from "./question/step4";
import Step5 from "./question/step5";

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [payload, setPayload] = useState({
        first_name: "",
        last_name: "",
        no_of_wheel: null,
        type_of_vehicle_id: "",
        specefic_model_id: "",
        start_date: "",
        end_date: ""
    });

    const handleNext = (data) => {
        setPayload((prevPayload) => ({ ...prevPayload, ...data }));
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        setStep((prevStep) => Math.max(prevStep - 1, 1));
    };


    return (
        <div>
            {step === 1 && <Step1 onNext={handleNext} />}
            {step === 2 && <Step2 onNext={handleNext} onPrevious={handlePrevious} />}
            {step === 3 && (
                <Step3
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    selectedWheel={payload.no_of_wheel}
                />
            )}
            {step === 4 && <Step4 onNext={handleNext} onPrevious={handlePrevious} vehicle_type_id={payload.type_of_vehicle_id} />}
            {step === 5 && <Step5 payload={payload} onPrevious={handlePrevious} />}
        </div>
    );
};

export default MultiStepForm;
