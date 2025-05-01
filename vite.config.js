"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_shadcn_theme_json_1 = __importDefault(require("@replit/vite-plugin-shadcn-theme-json"));
const path_1 = __importDefault(require("path"));
const vite_plugin_runtime_error_modal_1 = __importDefault(require("@replit/vite-plugin-runtime-error-modal"));
const url_1 = require("url");
const __dirname = path_1.default.dirname((0, url_1.fileURLToPath)(import.meta.url));
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_react_1.default)(),
        (0, vite_plugin_runtime_error_modal_1.default)(),
        (0, vite_plugin_shadcn_theme_json_1.default)(),
    ],
    server: {
        allowedHosts: [
            '2ac65543-58a8-4650-9a1b-8e5846f86587-00-1i11yft607uh8.spock.replit.dev',
            '.replit.dev'
        ]
    },
    resolve: {
        alias: {
            "@": path_1.default.resolve(__dirname, "client", "src"),
            "@shared": path_1.default.resolve(__dirname, "shared"),
            "@assets": path_1.default.resolve(__dirname, "attached_assets"),
        },
    },
    root: path_1.default.resolve(__dirname, "client"),
    build: {
        outDir: path_1.default.resolve(__dirname, "dist/public"),
        emptyOutDir: true,
    },
});
