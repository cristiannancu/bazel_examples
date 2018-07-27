load("@build_bazel_rules_typescript//:defs.bzl", "ts_library")
load("@build_bazel_rules_nodejs//:defs.bzl", "nodejs_binary")

ts_library(
    name = "my_code",
    srcs = [
            "index.ts",
            "foo.ts",
        ],
    tsconfig = "//:tsconfig.json",
    node_modules = "@yarn_managed//:node_modules",
)

nodejs_binary(
    name = "run_my_code",
    data = [
        ":my_code",
        "//:bazel-bin",
    ],
    node_modules = "@yarn_managed//:node_modules",
    entry_point = "test_workspace/bazel-bin/src/index",
)
