let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {requireContext.keys().forEach(requireContext);};
try {
  importAll(require.context('icons', true, /.svg$/));
} catch (error) {
  console.log(error);
}

type SvgName = {
  name:string
}

const Icon = (props:SvgName) => {
return(
  <svg className="icon">
    <use xlinkHref={'#'+props.name}  />
  </svg>
)
};
export default Icon;