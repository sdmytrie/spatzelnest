exports.init = () => {
  const lightOnBtn = document.querySelector("#lightOnBtn");
  const lightOffBtn = document.querySelector("#lightOffBtn");
  lightOnBtn.addEventListener("click", () => {
    axios.get(
      "http://192.168.1.160/core/api/jeeApi.php?apikey=0N3nAVMI4BfRtbAnbR4gUsZRhQWn7jy8&type=cmd&id=576"
    );
  });

  lightOffBtn.addEventListener("click", () => {
    axios.get(
      "http://192.168.1.160/core/api/jeeApi.php?apikey=0N3nAVMI4BfRtbAnbR4gUsZRhQWn7jy8&type=cmd&id=577"
    );
  });
};
