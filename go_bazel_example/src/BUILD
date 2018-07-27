load("@io_bazel_rules_go//go:def.bzl", "go_binary", "go_library")

go_library(
    name = "go_default_library",
    srcs = [
        "foo.go",
    ],
    importpath = "foo",
)

go_binary(
    name = "bar",
    srcs = ["main.go"],
    deps = [
    	":go_default_library",
    ],
)
