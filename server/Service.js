import { Service } from "node-windows";


const svc = new Service({
    name: "ESPRIT RAS ROBOTS SERVER",
    description: "ESPRIT RAS ROBOTS SERVER Service",
    script: "C:\\Users\\Administrator\\Desktop\\IEEE\\ESPRIT RAS ROBOTS\\server\\server.js",
})

svc.on("install", () => {
    svc.start()
})  

svc.install()