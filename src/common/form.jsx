import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";







function CommonForm({formControls, buttonText, formData, setFormData, onSubmit}) {

    function renderInputsByComponentType(getControlItem) {
            let element = null;
            let value = formData[getControlItem.name] || '';
            

            switch (getControlItem.componentType) {
                case 'input':
                    element = <Input 
                        name = {getControlItem.name}
                        placeholder = {getControlItem.placeholder}
                        id = {getControlItem.name}
                        type = {getControlItem.type}
                        value = {value}
                        onChange = { (event) => setFormData(
                            {
                                ...formData,
                                [getControlItem.name] : event.target.value,
                            }
                        ) }
                    />
                    break;
            
                default:
                    element = <Input 
                        name = {getControlItem.name}
                        placeholder = {getControlItem.placeholder}
                        id = {getControlItem.name}
                        type = {getControlItem.type}
                        value = {value}
                        onChange = { (event) => setFormData(
                            {
                                ...formData,
                                [getControlItem.name] : event.target.value,
                            }
                        ) }
                    />
                    break;
            }

            return element;
    }
    

    return ( 
        <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <label className="mb-1" > {controlItem.label} </label>

                            {
                                renderInputsByComponentType(controlItem)
                            }

                        </div> )
                }
            </div>
            <Button type="submit" className='mt-2 w-full' >{ buttonText || 'Submit'}</Button>
        </form>
     );
} 

export default CommonForm;