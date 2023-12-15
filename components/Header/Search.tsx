import Icon from "@/components/Icon/Icon";

const Search = () => {
    return (
        <div className="hidden sm:block">
          <form action="#">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <Icon name={"Search"} color={"#a3a3a3"} size={20} />
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125"
              />
            </div>
          </form>
        </div>
    )
}

export default Search;