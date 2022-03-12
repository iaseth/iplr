import os
import sys


def update_file(input, output):
	if not os.path.isfile(input):
		print(f"Input file NOT found: '{input}'")
		return
	else:
		print(f"Input file was found: '{input}'")

	if not os.path.isfile(output):
		print(f"\toutput file NOT found: '{output}'")
	else:
		print(f"\toutput file was found: '{output}'")

	input_mtime = os.path.getmtime(input)
	output_mtime = os.path.getmtime(output)
	if input_mtime > output_mtime:
		print(f"\t\toutput file needs update: {output}")
		with open(output, "w") as out:
			out.write(open(input).read())
			print(f"\t\tupdated: {output}")
	else:
		print(f"\t\toutput file is up-to-date: {output}")


def main():
	if len(sys.argv) < 2:
		print("Too few args!")
		return
	elif len(sys.argv) > 2:
		print("Too many args!")
		return

	source_basepath = sys.argv[1]
	if not os.path.isdir(source_basepath):
		print(f"Directory NOT found: '{source_basepath}'")
		return

	bundle_input_path = os.path.join(source_basepath, "bundle.json")
	bundle_output_path = os.path.join("public/data/bundle.json")
	update_file(bundle_input_path, bundle_output_path)

	codes_input_path = os.path.join(source_basepath, "codes.json")
	codes_output_path = os.path.join("src/codes.json")
	update_file(codes_input_path, codes_output_path)

if __name__ == '__main__':
	main()