import { Input } from "@/components/ui/input";







function ProductForm({formControls, formData, setFormData, onSubmit}) {

    function renderInputsByComponentType(getControlItem) {
            let element = null;
            let value = formData[getControlItem.name] || '';
            

            switch (getControlItem.componentType) {
                case 'input':
                    if (getControlItem.type === 'file') {
                        element = <input
                            type="file"
                            name={getControlItem.name}
                            onChange={(e) => setFormData({...formData, [getControlItem.name]: e.target.files[0]})}
                            className="w-full text-sm text-black border border-gray-300 rounded-md px-3 py-2"
                        />
                    }else {
                        element = <Input 
                            className="text-black"
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
                    }
                    break;
            
                default:
                    element = <Input 
                        className="text-black"
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
        <form onSubmit={onSubmit} >
            <div className="flex flex-col gap-3">
                {
                    formControls.map(controlItem => <div className="grid w-full gap-1.5" key={controlItem.name}>
                        <label className="mb-1 text-black" > {controlItem.label} </label>

                            {
                                renderInputsByComponentType(controlItem)
                            }

                    </div> )
                }
            </div>
        </form>
     );
} 

export default ProductForm;